import type React from 'react';

const Architecture: React.FC = () => {
  return (
    <section className="k8s-section">
      <h2>Architecture</h2>
      <div className="k8s-architecture">
        <div className="k8s-component">
          <h3>Control Plane</h3>
          <ul>
            <li>API Server - Central management point</li>
            <li>etcd - Distributed key-value store</li>
            <li>Scheduler - Pod placement</li>
            <li>Controller Manager - State management</li>
          </ul>
        </div>
        <div className="k8s-component">
          <h3>Worker Nodes</h3>
          <ul>
            <li>Kubelet - Node agent</li>
            <li>Container Runtime - Docker/containerd</li>
            <li>Kube Proxy - Network proxy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Architecture; 