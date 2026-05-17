const root = document.createElement('main');

root.innerHTML = `
  <style>
    body {
      margin: 0;
      width: 240px;
      font: 14px/1.4 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: #1f2328;
      background: #ffffff;
    }

    main {
      padding: 14px;
    }

    h1 {
      margin: 0 0 8px;
      font-size: 15px;
      font-weight: 650;
    }

    p {
      margin: 0;
      color: #57606a;
    }
  </style>
  <h1>Distraction Free YouTube</h1>
  <p>Active on YouTube. Reload the YouTube tab after updating the extension.</p>
`;

document.body.append(root);
