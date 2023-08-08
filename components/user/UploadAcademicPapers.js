import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const UploadAcademicPapers = ({ access_token }) => {

  const [academicPapers, setAcademicPapers] = useState(null);

  const router = useRouter();

  const {
    loading,
    user,
    academicPapersUploaded,
    error,
    clearErrors,
    uploadAcademicPapers,
    setAcademicPapersUploaded,
  } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }


    if (academicPapersUploaded) {
      toast.success("Your academic papers uploaded successfully.");
      setAcademicPapersUploaded(false);
      router.push("/browse-work-visa-jobs");

    }
   
  }, [error, academicPapersUploaded]);


  const submitAcademicPapersHandler = (e) => {
    e.preventDefault();

    const academicPapersFormData = new FormData();
    academicPapersFormData.append("academicPapers", academicPapers);

    uploadAcademicPapers(academicPapersFormData, access_token);
  };



  const onAcademicPapersChange = (e) => {
    setAcademicPapers(e.target.files[0]);
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
            <div className="headerWrapper profileUploadHeader">
              <h3> UPLOAD ACADEMIC Documents </h3> 
            </div>
            <form className="form" onSubmit={submitAcademicPapersHandler}>
              <div className="inputWrapper">
                <div className="inputBox profileUploadInput">
                  <i aria-hidden className="fas fa-upload"></i>
                  <input
                    type="file"
                    name="resume"
                    id="customFile"
                    accept="application/pdf"
                    onChange={onAcademicPapersChange}
                    required
                  />
                </div>
              </div>

              {user && user.academicPapers && (
                <>
                  <h4 className="text-center my-3">OR</h4>

                  <Link
                    href={`https://gaia-api.s3.amazonaws.com/${user.academicPapers}`}
                    target="_blank"
                    className="text-success text-center ml-4"
                    rel="noreferrer"
                  >
                    <b>
                      <i aria-hidden className="fas fa-download"></i> Download
                      Your Academic Documents
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
            {/* <Link href="/upload/resume">
              <div className="mt-5 float-left">
                <p>
                   <i class="fa fa-arrow-left" aria-hidden="true"></i> Upload Resume  
                </p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAcademicPapers;
