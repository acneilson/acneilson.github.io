import '../css/about.css';
import FadeIn from '../components/FadeIn';

function About() {
    return (
        <section className="about">
            <FadeIn className="about--inner">
                <h2 className="about--title">About</h2>
                <div className="about--line" aria-hidden="true" />
                <p className="about--text">
                    I'm a Test Automation Developer based in Toronto with 7+ years at Lightspeed
                    Commerce working test automation for high-volume commerce platforms. Most of my career has been
                    focused on making quality a shared, automated responsibility, not a gate at the end.
                    At Lightspeed, I helped build and maintain our core Python framework from the ground up using
                    pytest and Playwright to test REST/GraphQL APIs and UI end-to-end flows on every commit, that included schema
                    validation to catch breaking changes before they reached production.
                </p>
                <p className="about--text">
                    My domain is primarily web and API functional testing for distributed commerce
                    systems, with work in CI/CD quality gates via GitHub Actions and Docker. I design for
                    maintainability and scale, so tests stay fast and reliable as coverage grows, and partner closely
                    with backend, DevOps, and product to embed quality into the developer workflow.
                    human-centered tooling.
                </p>
                <p className="about--text">
                    What I enjoy most about test automation is the diagnostics and developer experience side — building the
                    parts that make failures useful. At Lightspeed I built AI-augmented reporting directly into the
                    pipeline to auto-generate detailed failure reports and distinguish infra/environment noise from
                    real product regressions, plus a scheduled analysis that surfaced recurring patterns for engineering
                    leadership. I like shift-left work where a good framework shortens the feedback loop from hours to
                    minutes and gives teams confidence to ship.
                </p>
            </FadeIn>
        </section>
    )
}

export default About;