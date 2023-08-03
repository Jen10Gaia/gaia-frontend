import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const UploadBankStatements = ({ access_token }) => {
  const [bankStatements, setBankStatements] = useState(null);

  const router = useRouter();

  const {
    loading,
    user,
    bankStatementsUploaded,
    error,
    clearErrors,
    uploadBankStatements,
    setBankStatementsUploaded,
  } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }


    if (bankStatementsUploaded) {
      toast.success("Your bank statements uploaded successfully.");
      setBankStatementsUploaded(false);
      router.push("/upload/academicpapers");
    }


  }, [error, bankStatementsUploaded,]);


  const submitBankStatementsHandler = (e) => {
    e.preventDefault();

    const bankStatementsFormData = new FormData();
    bankStatementsFormData.append("bankStatements", bankStatements);

    uploadBankStatements(bankStatementsFormData, access_token);
  };


  const onBankStatementsChange = (e) => {
    setBankStatements(e.target.files[0]);
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
            <div className=" profileUploadHeader ">
              <h3> UPLOAD BANK STATEMENTS </h3> 
              <span className="profileUploadHeader"><p>(last 6 months)</p></span>
            </div>
            <form className="form" onSubmit={submitBankStatementsHandler}>
              <div className="inputWrapper">
                <div className="inputBox profileUploadInput">
                  <i aria-hidden className="fas fa-upload"></i>
                  <input
                    type="file"
                    name="resume"
                    id="customFile"
                    accept="application/pdf"
                    onChange={onBankStatementsChange}
                    required
                  />
                </div>
              </div>

              {user && user.bankStatements && (
                <>
                  <h4 className="text-center my-3">OR</h4>

                  <Link
                    href={`https://gaia-api.s3.amazonaws.com/${user.bankStatements}`}
                    className="text-success text-center ml-4"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <b>
                      <i aria-hidden className="fas fa-download"></i> Download
                      Your Bank Statements
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
            <Link href="/upload/academicpapers">
              <div className="mt-4 float-right">
                <p>
                  Upload Academic Papers <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UploadBankStatements;
