import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react"

const ConctactCardItem = (props) => {
  return (
    <>
      {props.children ? <br /> : ""} {props.children}
    </>
  )
}

export default function Home() {
  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")

  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")

  let [title, setTitle] = useState("")
  let [org, setOrg] = useState("")

  let [copied, setCopied] = useState(false)

  // For copying rich text to the user's clipboard
  const copyToClipboard = (str) => {
    function listener(e) {
      e.clipboardData.setData("text/html", str)
      e.clipboardData.setData("text/plain", str)
      e.preventDefault()
    }
    document.addEventListener("copy", listener)
    document.execCommand("copy")
    document.removeEventListener("copy", listener)
    setCopied(true)
  }

  // Clear the copied message when the user updates their information
  useEffect(() => {
    setCopied(false)
  }, [phone, email, firstName, lastName, title, org])

  return (
    <div className={styles.container}>
      {/* Instructions and application title */}
      <div className={styles.promo}>
        <div className={`${styles.grid} ${styles.maxSpace}`}>
          <div>
            <div className={`${styles.grid} ${styles.noSpace}`}>
              <div>
                <img
                  src="https://storage.googleapis.com/web-spaces-production/signature/uri-logo.png"
                  className={styles.logo}
                />
              </div>
              <div>
                <h1> URI Email Signature Tool</h1>
              </div>
            </div>
            Easy email signature creator for students, faculty and staff at the
            University of Rhode Island.
          </div>
          <div>
            <div className={`${styles.grid} ${styles.noSpace}`}>
              <div>
                <iframe
                  className={styles.githubBtn}
                  src="https://ghbtns.com/github-btn.html?user=ramhacks&repo=rhody-signature&type=fork&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="125"
                  height="30"
                  title="GitHub"
                ></iframe>
              </div>
              <div>
                <iframe
                  className={styles.githubBtn}
                  src="https://ghbtns.com/github-btn.html?user=ramhacks&type=follow&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="230"
                  height="30"
                  title="GitHub"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Contact entry pane */}
        <div className={styles.infoEntry}>
          <h2>Contact card information</h2>
          <p>
            Enter your contact details you would like included on your email
            signature. Leave fields blank for information you wish not to
            include.
          </p>

          <div className={styles.formGroup}>
            <span className={styles.formHeader}>Name</span>
            <br />
            <input
              placeholder="First name"
              className={styles.formInput}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
            <input
              placeholder="Last name"
              className={styles.formInput}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            ></input>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.formHeader}>Role</span>
            <br />
            <input
              placeholder="Job Title"
              className={styles.formInput}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
            <input
              placeholder="Department"
              className={styles.formInput}
              value={org}
              onChange={(event) => setOrg(event.target.value)}
            ></input>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.formHeader}>Contact</span>
            <br />
            <input
              placeholder="Email"
              className={styles.formInput}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <input
              placeholder="Phone"
              className={styles.formInput}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            ></input>
          </div>

          <p>
            When you have finished filling in all information you'd like to,
            click anywhere on your signature to copy it to your clipboard.
          </p>
        </div>

        {/* Logo preview area */}
        <div className={styles.previewArea}>
          <h2>Your email signature preview</h2>

          <p className={styles.dummyEmailContent}>
            Dear Rhody,
            <br />
            <br />
            This is a sample of an important email body. Words, sentences,
            paragraphs, jokes, some emails will contain these, and more.
            <br />
            <br />
            Sincerely,
          </p>
          {copied && (
            <p className={styles.alertSuccess}>
              Signature copied to your clipboard! To set a signature in Gmail,
              paste your clipboard into the{" "}
              <a href="https://support.google.com/mail/answer/8395?co=GENIE.Platform%3DDesktop&hl=en">
                Gmail signature manager.
              </a>
            </p>
          )}
          <div id="signature">
            <table
              onClick={() =>
                copyToClipboard(document.getElementById("signature").innerHTML)
              }
            >
              <tr>
                <td>
                  <img
                    src="https://storage.googleapis.com/web-spaces-production/signature/uri-logo.png"
                    style={{
                      height: "66px",
                    }}
                    alt="URI Logo"
                  />
                </td>
                <td>
                  <p
                    style={{
                      borderLeft: "2px solid rgb(0,33,71)",
                      minHeight: "55px",
                      padding: "5px",
                      paddingLeft: "15px",
                      paddingBottom: "0px",
                      paddingTop: "0px",
                      marginLeft: "10px",
                      fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
                    }}
                  >
                    <b>
                      {firstName} {lastName}
                    </b>
                    <ConctactCardItem>
                      {title}
                      {title && org ? `,` : false} {org ? <i>{org}</i> : false}
                    </ConctactCardItem>
                    <ConctactCardItem>
                      {email ? (
                        <>
                          e: <a href={`mailto:${email}`}>{email}</a>
                        </>
                      ) : (
                        false
                      )}
                    </ConctactCardItem>
                    <ConctactCardItem>
                      {phone ? `p: ${phone}` : false}
                    </ConctactCardItem>
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
