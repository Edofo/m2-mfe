import type React from 'react';

const CoreConcepts: React.FC = () => {
  return (
    <section className="k8s-section">
      <h2>Core Concepts</h2>
      <div className="k8s-concepts">
        <div className="k8s-concept">
          <h3>Pods</h3>
          <p>
            Smallest deployable unit in Kubernetes, containing one or more containers.
          </p>
        </div>
        <div className="k8s-concept">
          <h3>Services</h3>
          <p>
            Abstraction that defines a logical set of Pods and a policy to access them.
          </p>
        </div>
        <div className="k8s-concept">
          <h3>Deployments</h3>
          <p>
            Manages the deployment and updating of Pods in a declarative way.
          </p>
        </div>
        <div className="k8s-concept">
          <h3>Namespaces</h3>
          <p>
            Provides a way to divide cluster resources between multiple users or projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreConcepts; 