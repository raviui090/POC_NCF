import * as React from 'react';
import GrantPage from "./pages/GrantPage";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Popup from "./components/common/Popup";
import HelpButton from "./components/common/HelpButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScroll from "./hooks/useScroll";
import cn from "classnames";


function App() {
    const scrolled = useScroll();
    return (
        <div className="App">
            <SidePanel />
            <BrowserRouter>
                <main className={cn("main", scrolled && "scrolled")}>
                    <Header />
                    <div className="scrollWrapper">
                        <Routes>
                            <Route path="/" element={<GrantPage />} />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
            <Popup />
            <HelpButton />
        </div>
    );
}

export default App;
