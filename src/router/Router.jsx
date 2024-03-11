import { Navigate, Route, Routes } from "react-router-dom";
import DashBoards from '../pages/DashBoards';
import MySpace from '../pages/MySpace'
import ShareSpace from '../pages/ShareSpace'
import Wiki from '../pages/Wiki'
import Lingo from '../pages/Lingo'
import Favorites from '../pages/Favorites'
import Trash from '../pages/Trash'
import Sheet from '../components/Sheet/Sheet'

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to='/dashboard' element={<DashBoards/>}/>} />
        <Route path="/dashboard" element={<DashBoards/>} />
        <Route path="/my-spaces" element={<MySpace/>} />
        <Route path="/share-spaces" element={<ShareSpace/>} />
        <Route path="/wiki" element={<Wiki/>} />
        <Route path="/lingo" element={<Lingo/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/trash" element={<Trash/>} />
        <Route path="/sheet" element={<Sheet/>} />
      </Routes>
  )
}

export default Router