
import type { App } from "elysia-be/app";
import { treaty } from "@elysiajs/eden"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages";
import Dashboard from "./pages/dashabord";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ElysiaClientContextProvider } from "./providers/edenProvider";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";

const client = treaty<App>('localhost:8000', {
  fetch : {
    credentials : "include"
  }
})

const queryClient = new QueryClient()

export function App() {

  
  
  return (
    <QueryClientProvider client={queryClient}>    
    <ElysiaClientContextProvider value={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>  
      </BrowserRouter>
    </ElysiaClientContextProvider>
    </QueryClientProvider>    
  );
}

export default App;
