import React, { useState } from "react";
import styles from "./Signup.module.scss";
import { ReactComponent as EllipseIcon } from "assets/images/Ellipse 1.svg";
import { ReactComponent as VectorIcon } from "assets/images/Vector 131.svg";
import { ReactComponent as UbiscoreLogo } from "assets/images/ubiscore-logo.svg";
import { ReactComponent as StepperIcon } from "assets/images/stepper.svg";
import Input from "components/input/Input";
import Select from "components/select/Select";
import Checkbox from "components/checkbox/Checkbox";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [nextStep, setNextStep] = useState("signup");
  const ThankYou = () => {
    return (
      <>
        <div className={styles.signup}>Thank You...</div>
        <div className={styles.signupDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
        </div>
        <button
          onClick={() => {
            setNextStep("signup");
          }}
          className={styles.button}
        >
          Back to Home
        </button>
        <div className={styles.account}>
          Questions? Email us <span>help@ubiscore.com</span>
        </div>
      </>
    );
  };
  return (
    <div className={styles.appBody}>
      <div className={styles.userDetails}>
        <div className={styles.name}>Jerrome Bell</div>
        <div className={styles.userTitle}>Product Designer</div>
        <div className={styles.userDetails}>
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit”
        </div>
        <StepperIcon className={styles.stepperIcon} />
        <EllipseIcon className={styles.ellipseIcon} />
        <VectorIcon className={styles.vectorIcon} />
      </div>
      <div className={styles.signUpBody}>
        <div className={styles.signUpContent}>
          <UbiscoreLogo className={styles.logo} />
          <div className={styles.formContent}>
            {nextStep === "signup" ? (
              <>
                <div className={styles.signup}>Signup</div>
                <div className={styles.signupDescription}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor{" "}
                </div>
                <div>
                  <Formik
                    initialValues={{
                      websiteUrl: "",
                      lastName: "",
                      email: "",
                      acceptedTerms: false, // added for our checkbox
                      jobType: "", // added for our select
                    }}
                    validationSchema={Yup.object({
                      websiteUrl: Yup.string().required("Required"),
                      lastName: Yup.string()
                        .max(30, "Must be 20 characters or less")
                        .required("Required"),
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                      acceptedTerms: Yup.boolean()
                        .required("Required")
                        .oneOf(
                          [true],
                          "You must accept the terms and conditions."
                        ),
                      jobType: Yup.string()
                        .oneOf(
                          ["Google ad", "twitter", "linkedin", "indeed"],
                          "Invalid Selection"
                        )
                        .required("Required"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        setNextStep("Thankyou");
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    <Form>
                      <Input
                        label="Organization Website URL"
                        name="websiteUrl"
                        type="text"
                        placeholder="http://www.example.com"
                      />

                      <Input
                        label="Work email"
                        name="email"
                        type="email"
                        placeholder="mario.rossi@gmail.com"
                      />

                      <Input
                        label="Name"
                        name="lastName"
                        type="text"
                        placeholder="Mario Rossi"
                      />

                      <Select label="How did you hear about us?" name="jobType">
                        <option value="">Select one</option>
                        <option value="Google ad">Google Ad</option>
                        <option value="twitter">Twitter</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="indeed">Facebook</option>
                      </Select>

                      <Checkbox name="acceptedTerms">
                        <div className={styles.terms}>
                          Read and agree <span>Terms and Conditions.</span>
                        </div>
                      </Checkbox>

                      <button type="submit" className={styles.button}>
                        Get my free score
                      </button>
                    </Form>
                  </Formik>
                  <div className={styles.account}>
                    Already have an account? <span>LogIn</span>
                  </div>
                </div>{" "}
              </>
            ) : (
              <ThankYou />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
