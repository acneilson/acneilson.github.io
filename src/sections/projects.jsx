import '../css/projects.css';
import FadeIn from '../components/FadeIn';

function Projects() {
    return (
        <section className="projects">
            <FadeIn className="projects--inner">
                <h2 className="projects--title">Projects / Case Studies</h2>
                <div className="projects--grid">
                    <div className="projects--card">
                        <h3>Python API Test Framework — Lightspeed-style</h3>
                        <p className="projects--stack">Python • pytest • Playwright • REST • GraphQL • Pydantic • Docker • GitHub Actions</p>
                        <p>Architected from scratch to validate REST and GraphQL contracts on every commit. Built-in JSON Schema validation catches breaking changes pre-production, with containerized execution and AI-generated failure diagnostics.</p>
                        <div className="projects--links">
                            <a href="#">GitHub</a>
                            <a href="#">Allure Report</a>
                        </div>
                    </div>
                    <div className="projects--card">
                        <h3>AI Failure Diagnostics Pipeline</h3>
                        <p className="projects--stack">GitHub Actions • Docker • AI Reporting</p>
                        <p>Scheduled workflow that aggregates test failures, distinguishes infra/environment noise from product regressions, and auto-generates detailed reports surfacing systemic patterns to engineering leadership.</p>
                        <div className="projects--links">
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                    <div className="projects--card">
                        <h3>Open-Source Demo — Placeholder</h3>
                        <p className="projects--stack">Playwright • Public API</p>
                        <p>Template for a public demo project (e.g., testing automationpractice.com + public GraphQL API) to showcase framework design when work code is private. Add architecture diagram and execution-time metrics here.</p>
                        <div className="projects--links">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default Projects;
