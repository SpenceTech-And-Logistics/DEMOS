import { Route, Routes } from 'react-router-dom'
import Hub from './Hub.jsx'
import Consultant from './spa/Consultant.jsx'
import Logistics from './spa/Logistics.jsx'
import MpaSite from './mpa/MpaSite.jsx'
import NgoSite from './ngo/NgoSite.jsx'
import Restaurant from './spa/Restaurant.jsx'
import RealEstate from './spa/RealEstate.jsx'
import MiniSite from './mini/MiniSite.jsx'
import { clinic } from './data/clinic.js'
import { school } from './data/school.js'
import Creator from './spa/Creator.jsx'
import { developer, photographer } from './data/portfolio.js'
import { ScrollTop } from './shared/hooks.jsx'
import { mp } from './data/mp.js'
import { ps } from './data/ps.js'

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/spa/consultant" element={<Consultant />} />
        <Route path="/spa/logistics" element={<Logistics />} />
        <Route path="/mpa/mp/*" element={<MpaSite site={mp} />} />
        <Route path="/mpa/ps/*" element={<MpaSite site={ps} />} />
        <Route path="/mpa/ngo/*" element={<NgoSite />} />
        <Route path="/spa/restaurant" element={<Restaurant />} />
        <Route path="/spa/estate" element={<RealEstate />} />
        <Route path="/mpa/clinic/*" element={<MiniSite site={clinic} />} />
        <Route path="/mpa/school/*" element={<MiniSite site={school} />} />
        <Route path="/spa/creator" element={<Creator />} />
        <Route path="/mpa/photographer/*" element={<MiniSite site={photographer} />} />
        <Route path="/mpa/developer/*" element={<MiniSite site={developer} />} />
        <Route path="*" element={<Hub />} />
      </Routes>
    </>
  )
}
