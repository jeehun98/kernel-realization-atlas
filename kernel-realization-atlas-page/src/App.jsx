import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 새 셸 + 새 페이지들
import PageShell from "./components/layout/PageShell";
import AtlasHomePage from "./pages/AtlasHomePage";
import AtlasOverviewNewPage from "./pages/AtlasOverviewNewPage";
import OperatorsNewPage from "./pages/OperatorsNewPage";
import PropertiesNewPage from "./pages/PropertiesNewPage";
import AnalysisNewPage from "./pages/AnalysisNewPage";
import MemoryNewPage from "./pages/MemoryNewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/atlas-new" replace />} />

        <Route
          path="/atlas-new"
          element={
            <PageShell>
              <AtlasHomePage />
            </PageShell>
          }
        />

        <Route
          path="/atlas-overview-new"
          element={
            <PageShell>
              <AtlasOverviewNewPage />
            </PageShell>
          }
        />

        <Route
          path="/operators-new"
          element={
            <PageShell fullWidth>
              <OperatorsNewPage />
            </PageShell>
          }
        />

        <Route
          path="/properties-new"
          element={
            <PageShell>
              <PropertiesNewPage />
            </PageShell>
          }
        />

        <Route
          path="/analysis-new"
          element={
            <PageShell fullWidth>
              <AnalysisNewPage />
            </PageShell>
          }
        />

        <Route
          path="/memory-new"
          element={
            <PageShell>
              <MemoryNewPage />
            </PageShell>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}