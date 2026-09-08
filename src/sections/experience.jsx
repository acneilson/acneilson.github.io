import '../css/experience.css';
import FadeIn from '../components/FadeIn';

function Experience() {
    return (
        <section className="experience">
            <FadeIn className="experience--inner">
                <h2 className="experience--title">Work History</h2>

                <div className="experience--item">
                    <h3>Senior Quality Test Developer — Lightspeed Commerce Inc</h3>
                    <span className="experience--dates">Apr 2019 – Jul 2026</span>
                    <ul>
                        <li>Architected and maintained Python-based framework (pytest + Playwright) for functional testing of REST and GraphQL APIs</li>
                        <li>Implemented contract/schema validation to detect breaking API changes before production</li>
                        <li>Embedded quality gates into CI/CD via GitHub Actions, Docker, and containerized execution on every commit</li>
                        <li>Leveraged AI to generate detailed CI failure diagnostics and distinguish infra failures from product regressions</li>
                        <li>Built scheduled AI workflow to aggregate and analyze test failures, surfacing systemic patterns to engineering leadership</li>
                    </ul>
                </div>

                <div className="experience--item">
                    <h3>Web Support Specialist — Jonas Software</h3>
                    <span className="experience--dates">Mar 2017 – Apr 2019</span>
                    <ul>
                        <li>Client liaison troubleshooting email marketing, list/segment, delivery, and scheduling issues</li>
                        <li>Ran SQL and resolved client-server to web-server integration issues, DNS conflicts, and SSL certificate renewals</li>
                    </ul>
                </div>

                <div className="experience--item">
                    <h3>NTSD Knowledge Management Specialist — Rogers Communications</h3>
                    <span className="experience--dates">Jun 2011 – Jul 2015</span>
                    <ul>
                        <li>Selected as 1 of 4 to create Rogers' unified knowledge platform (NOVA/Rogers.com), including first cross-functional content template</li>
                        <li>Created Rogers SpeedCheck portal (40.8% of Internet Support traffic), reducing repeat calls</li>
                    </ul>
                </div>

                <div className="experience--item">
                    <h3>Technical Support Consultant — Rogers Communications</h3>
                    <span className="experience--dates">2011 – 2015</span>
                    <ul>
                        <li>Ranked 10th of 258 consultants; achieved 101.25% of CX and Financial targets while coaching underperformers</li>
                    </ul>
                </div>
            </FadeIn>
        </section>
    )
}

export default Experience;
