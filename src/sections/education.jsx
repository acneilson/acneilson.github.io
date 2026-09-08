import '../css/education.css';
import FadeIn from '../components/FadeIn';

function Education() {
    return (
        <section className="education">
            <FadeIn className="education--inner">
                <h2 className="education--title">Education</h2>
                <div className="education--list">
                    <div className="education--item">
                        <h3>B.A. Honours, Communication Studies and Humanities</h3>
                        <span>York University — 2010</span>
                    </div>
                    <div className="education--item">
                        <h3>Web Design & Production</h3>
                        <span>Humber College — 2016</span>
                    </div>
                    <div className="education--item">
                        <h3>Javascript and AngularJS</h3>
                        <span>Seneca College — 2017</span>
                    </div>
                    <div className="education--item">
                        <h3>PHP: Databases, CMS and Framework</h3>
                        <span>Seneca College — 2017</span>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default Education;
