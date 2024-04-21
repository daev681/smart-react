import React from 'react';
import './App.css';
import './css/css/source/styles/smart.default.css'; // smart.default.css 파일 import
import './css/css/assets/css/main.css'; // main.css 파일 import
import './css/css/assets/plugins/ui/assets/ui/plugins/css/plugins.min.css'; // plugins.min.css 파일 import
import './css/css/common-layout.css'; // common-layout.css 파일 import
import "./css/css/source/modules/smart.chart.js";
import "./css/css/source/modules/smart.input.js";
import "./css/css/source/modules/smart.colorinput.js";
import "./css/css/source/modules/smart.router.js";
import "./css/css/source/modules/smart.table.js";
import "./css/css/source/modules/smart.tree.js";
import "./css/css/source/modules/smart.tooltip.js";
// import "./css/css/index.js";
// import "./css/css/routing.js";

import NotFoundPage from './component/NotFoundPage'; // NotFoundPage 컴포넌트 import

function App() {
  return (
    <div className="App">
      <NotFoundPage>
      </NotFoundPage>
    </div>
  );
}











export default App;
