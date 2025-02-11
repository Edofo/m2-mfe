import type React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="k8s-section">
      <h2>Introduction to Kubernetes</h2>
      <p>
        Kubernetes is an open-source container orchestration platform that automates
        the deployment, scaling, and management of containerized applications.
      </p>
      <div className="k8s-highlights">
        <div className="k8s-highlight-item">
          <h3>Automation</h3>
          <p>Automated deployment and scaling</p>
        </div>
        <div className="k8s-highlight-item">
          <h3>Portability</h3>
          <p>Works on-premises or in the cloud</p>
        </div>
        <div className="k8s-highlight-item">
          <h3>Extensibility</h3>
          <p>Modular and extensible architecture</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 