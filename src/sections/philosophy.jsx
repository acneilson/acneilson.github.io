import '../css/philosophy.css';
import FadeIn from '../components/FadeIn';

function Philosophy() {
    return (
        <section className="philosophy">
            <FadeIn className="philosophy--inner">
                <h2 className="philosophy--title">Testing Philosophy</h2>
                <div className="philosophy--grid">
                    <div className="philosophy--item">
                        <h3>Maintainability First</h3>
                        <p>Stable locators, explicit waits, and test data isolation via fixtures. Page
                            Object patterns and reusable helpers so tests stay green as the product evolves, not
                            brittle.</p>
                    </div>
                    <div className="philosophy--item">
                        <h3>Shift-Left & Shared Quality</h3>
                        <p>Partner with backend, DevOps, and product to make quality automated and collaborative —
                            quality gates in GitHub Actions, actionable diagnostics, and fast feedback over late-stage
                            gates.</p>
                    </div>
                    <div className="philosophy--item">
                        <h3>Test Pyramid</h3>
                        <p>Decide what to automate intentionally — favor fast, reliable API tests for
                            coverage, supplement with focused critical UI E2E flows where user journeys matter. Avoid automating
                            everything at the UI layer.</p>
                    </div>
                    <div className="philosophy--item">
                        <h3>Contract Testing</h3>
                        <p>Schema validation (JSON Schema) on every commit to catch breaking REST/GraphQL
                            changes before production.</p>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default Philosophy;
