import { useState, type FormEvent, type KeyboardEvent } from 'react';

function App() {
  const [capsLockOn, setCapsLockOn] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (typeof e.getModifierState === 'function') {
      setCapsLockOn(e.getModifierState('CapsLock'));
    }
  };

  const preventDefault = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div id="prefooter">
      <header>
        <div id="identity">
          <h1 id="gt-logo">
            <a title="Georgia Institute of Technology" rel="home" href="/" onClick={preventDefault}>
              <img src="/gt-logo.png" alt="Georgia Tech" />
            </a>
          </h1>
          <h2 id="site-title">Georgia Tech Login Service (7)</h2>
        </div>
      </header>

      <section id="main">
        <div id="content" className="content">
          <div id="cas-content">
            <form method="post" id="fm1" action="login" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-5 col-12 gx-0 gx-md-4">
                  <div id="login">
                    <h2>Enter your GT Account and Password</h2>

                    <section>
                      <label htmlFor="username">
                        <span className="accesskey">G</span>T Account:
                      </label>
                      <div>
                        <input
                          className="required"
                          id="username"
                          size={25}
                          tabIndex={1}
                          type="text"
                          accessKey="u"
                          autoComplete="off"
                          name="username"
                          defaultValue=""
                        />
                      </div>
                    </section>

                    <section>
                      <label htmlFor="password">
                        <span className="accesskey">P</span>assword:
                      </label>
                      <div>
                        <input
                          className="required"
                          type="password"
                          id="password"
                          size={25}
                          tabIndex={2}
                          accessKey="p"
                          autoComplete="off"
                          name="password"
                          defaultValue=""
                          onKeyUp={handleKeyUp}
                        />
                        <span id="capslock-on" style={{ display: capsLockOn ? 'block' : 'none' }}>
                          <p>
                            <i className="fa fa-exclamation-circle">!</i>
                            <span> CAPSLOCK key is turned on!</span>
                          </p>
                        </span>
                      </div>
                    </section>

                    <section className="check"></section>

                    <section className="btn-row buttons">
                      <input
                        className="btn btn-submit button"
                        name="submitbutton"
                        accessKey="l"
                        value="LOGIN"
                        tabIndex={6}
                        type="submit"
                      />
                      <br />
                      <br />
                      <a
                        href="https://iam.gatech.edu/help/"
                        target="_blank"
                        onClick={preventDefault}
                      >
                        <input
                          type="button"
                          className="btn btn-submit button"
                          name="helpbutton"
                          value="Get Help"
                        />
                      </a>
                      <p>
                        This computer system is the property of the Georgia Institute of
                        Technology. Use of this system requires compliance with all Institute
                        and Board of Regents policies, including the{' '}
                        <a
                          href="http://b.gatech.edu/it-policies"
                          target="_blank"
                          onClick={preventDefault}
                        >
                          Acceptable Use Policy, Cyber Security Policy and Data Privacy Policy
                        </a>
                        . Users should have no expectation of privacy; all activity and data
                        may be monitored, recorded, inspected, or disclosed to authorized
                        personnel to meet Institute obligations.
                        <br />
                        By using this system, you acknowledge and consent to these terms.
                      </p>
                    </section>
                  </div>
                </div>

                <div className="col-md-7 col-12 gx-0 gx-md-2">
                  <div id="loginwarn">
                    <p></p>
                    <p>
                      <div className="alert-box secondary">
                        <b>SECURITY AWARENESS</b>
                        <br />
                        <br />
                        <b>Duo codes are strictly confidential</b>
                        <ul>
                          <li>
                            Never share a Duo code with anyone via phone, email, text, or chat.
                          </li>
                          <li>Never use a Duo code you receive from anyone.</li>
                          <li>Georgia Tech IT team will never ask you for your Duo code.</li>
                          <li>
                            Deny any Duo Push that you did not initiate by tapping "I'm not
                            logging in" and "Yes" for suspicious login. Then, follow the{' '}
                            <a
                              href="https://iam.gatech.edu/help/phishing-recovery/"
                              target="_blank"
                              onClick={preventDefault}
                            >
                              Phishing Recovery
                            </a>{' '}
                            process.
                          </li>
                        </ul>
                        <b>
                          Recent Phishing Email Subjects identified in Cyberattacks at Georgia
                          Tech [see{' '}
                          <a
                            href="https://gophishing.security.gatech.edu/"
                            target="_blank"
                            onClick={preventDefault}
                          >
                            GT Phishbowl
                          </a>
                          ]
                        </b>
                        <ul>
                          <li>Short Term Research Internship Opportunity</li>
                          <li>
                            Remote Administrative Support Assistant | Part-Time Opportunity
                          </li>
                          <li>
                            Exciting Part-Time Administrative Assistant Opportunity! | Action
                            Required: Email Account Confirmation
                          </li>
                          <li>Georgia Tech – Account Verification Notice</li>
                          <li>Flexible Remote Opportunity – Earn Up to $550/Week</li>
                        </ul>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="superfooter">
        <div id="superfooter-content">&nbsp;</div>
      </section>

      <footer id="footer">
        <div id="footer-content">
          <ul>
            <li>
              <a
                href="https://www.gatech.edu/emergency/"
                target="_blank"
                onClick={preventDefault}
              >
                Emergency Information
              </a>
            </li>
            <li>
              <a
                href="https://www.gatech.edu/legal/"
                target="_blank"
                onClick={preventDefault}
              >
                Legal &amp; Privacy Information
              </a>
            </li>
            <li>
              <a
                href="https://www.gatech.edu/accessibility/"
                target="_blank"
                onClick={preventDefault}
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="https://www.gatech.edu/accountability/"
                target="_blank"
                onClick={preventDefault}
              >
                Accountability
              </a>
            </li>
            <li>
              <a
                href="https://www.gatech.edu/accreditation/"
                target="_blank"
                onClick={preventDefault}
              >
                Accreditation
              </a>
            </li>
            <li>
              <a href="https://www.careers.gatech.edu" target="_blank" onClick={preventDefault}>
                Employment
              </a>
            </li>
          </ul>
          <p>&copy; 2021 Georgia Institute of Technology</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
