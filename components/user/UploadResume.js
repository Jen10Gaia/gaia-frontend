import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const UploadResume = ({ access_token }) => {
  const [resume, setResume] = useState(null);


  const router = useRouter();

  const {
    loading,
    user,
    resumeUploaded,
    error,
    clearErrors,
    uploadResume,
    setResumeUploaded,
  } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (resumeUploaded) {
      toast.success("Your resume uploaded successfully.");
      setResumeUploaded(false);
      router.push("/upload/bankstatements");
    }
 
  }, [error, resumeUploaded,]);

  const submitResumeHandler = (e) => {
    e.preventDefault();

    const resumeFormData = new FormData();
    resumeFormData.append("resume", resume);

    uploadResume(resumeFormData, access_token);

  };


  const onResumeChange = (e) => {
    setResume(e.target.files[0]);
  };


  return (
    <div className="modalMask">
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/resume-upload.svg" alt="resume" layout="fill" />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h3> UPLOAD RESUME </h3>
            </div>
            <form className="form" onSubmit={submitResumeHandler}>
              <div className="inputWrapper">
                <div className="inputBox profileUploadInput">
                  <i aria-hidden className="fas fa-upload"></i>
                  <input
                    type="file"
                    name="resume"
                    id="customFile"
                    accept="application/pdf"
                    onChange={onResumeChange}
                    required
                  />
                </div>
              </div>

              {user && user.resume && (
                <>
                  <h4 className="text-center my-3">OR</h4>

                  <Link
                    href={`https://gaia-api.s3.amazonaws.com/${user.resume}`}
                    className="text-success text-center ml-4"
                    rel="noreferrer"
                    target="_blank"
                  >

                    <b>
                      <i aria-hidden className="fas fa-download"></i> Download
                      Your Resume
                    </b>

                  </Link>
                </>
              )}
              <div className="uploadButtonWrapper">
                <button type="submit" className="uploadButton">
                  {loading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </form>

            <Link href="/upload/bankstatements">
              <div className="mt-5 float-right">
                <p>
                  Upload Bank Statements <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </p>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
