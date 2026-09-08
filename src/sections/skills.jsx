import '../css/skills.css';
import FadeIn from '../components/FadeIn';

function SkillIcon({ name }) {
  const brandSrc = {
    'Python': 'https://cdn.simpleicons.org/python/3776AB',
    'pytest': 'https://cdn.simpleicons.org/pytest/0A9EDC',
    'GraphQL': 'https://cdn.simpleicons.org/graphql/E10098',
    'JSON Schema / Pydantic': 'https://cdn.simpleicons.org/json/000000',
    'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
    'GitHub Actions': 'https://cdn.simpleicons.org/githubactions/2088FF',
    'SQL': 'https://cdn.simpleicons.org/mysql/4479A1',
    'Containerized Execution': 'https://cdn.simpleicons.org/docker/2496ED',
  };

  if (brandSrc[name]) {
    return <img src={brandSrc[name]} alt="" className="skills--icon skills--icon--img" width="18" height="18" loading="lazy" />;
  }

  const fallback = {
    'Playwright': (
      <svg className="skills--icon" viewBox="0 0 24 24" fill="#2EAD33" aria-hidden="true" width="18" height="18">
        <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z" />
      </svg>
    ),
    'REST APIs': (
      <svg className="skills--icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    'Contract / Schema Validation': (
      <svg className="skills--icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    'CI/CD': (
      <svg className="skills--icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v-5" />
      </svg>
    ),
    'DNS / SSL': (
      <svg className="skills--icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    'AI-assisted Diagnostics & Reporting': (
      <svg className="skills--icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09z" />
        <path d="M19 11l.867 2.5L22 14l-2.133.5L19 17l-.867-2.5L16 14l2.133-.5z" />
      </svg>
    ),
    'Failure-Trend Analysis': (
      <svg className="skills--icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 16l3-3 3 3 5-5" />
        <circle cx="7" cy="16" r="1" fill="currentColor" stroke="none" />
        <circle cx="10" cy="13" r="1" fill="currentColor" stroke="none" />
        <circle cx="13" cy="16" r="1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="11" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  };

  return fallback[name] || (
    <svg className="skills--icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Skills() {
    return (
        <section className="skills">
            <FadeIn className="skills--inner">
                <h2 className="skills--title">Core Skills</h2>
                <div className="skills--grid">
                    <div className="skills--category">
                        <h3>Languages & Frameworks</h3>
                        <ul>
                            <li><SkillIcon name="Python" />Python</li>
                            <li><SkillIcon name="pytest" />pytest</li>
                            <li><SkillIcon name="Playwright" />Playwright</li>
                        </ul>
                    </div>
                    <div className="skills--category">
                        <h3>API Testing</h3>
                        <ul>
                            <li><SkillIcon name="REST APIs" />REST APIs</li>
                            <li><SkillIcon name="GraphQL" />GraphQL</li>
                            <li><SkillIcon name="JSON Schema" />JSON Schema / Pydantic</li>
                            <li><SkillIcon name="Contract / Schema Validation" />Contract / Schema Validation</li>
                        </ul>
                    </div>
                    <div className="skills--category">
                        <h3>CI/CD & DevOps</h3>
                        <ul>
                            <li><SkillIcon name="Docker" />Docker</li>
                            <li><SkillIcon name="Containerized Execution" />Containerized Execution</li>
                            <li><SkillIcon name="GitHub Actions" />GitHub Actions</li>
                            <li><SkillIcon name="CI/CD" />CI/CD</li>
                        </ul>
                    </div>
                    <div className="skills--category">
                        <h3>Data & Infra</h3>
                        <ul>
                            <li><SkillIcon name="SQL" />SQL</li>
                        </ul>
                    </div>
                    <div className="skills--category">
                        <h3>AI-Augmented Quality</h3>
                        <ul>
                            <li><SkillIcon name="AI-assisted Diagnostics & Reporting" />AI-assisted Diagnostics & Reporting</li>
                            <li><SkillIcon name="Failure-Trend Analysis" />Failure-Trend Analysis</li>
                        </ul>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default Skills;
