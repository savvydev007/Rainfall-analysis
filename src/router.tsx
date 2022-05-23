import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import RainfallSettings from 'pages/RainfallSettings';
import ChartView from 'pages/ChartView';

function MainRouter() {

  return (
    <Router>
      <Routes>
        <Route path="/rainfall-settings" element={<RainfallSettings />} />
        <Route path="/" element={<Navigate to='/rainfall-settings' />} />
        <Route path="/chart-view" element={<ChartView />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
