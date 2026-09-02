import { createRoot } from 'react-dom/client'
import Lanyard from './Lanyard.jsx'

export function mountLanyard() {
  const container = document.getElementById('lanyard-root')
  if (!container || container.dataset.mounted === 'true') return

  container.dataset.mounted = 'true'

  // Framing (left-of-centre on wide screens, centred + lifted on portrait)
  // is handled inside <Lanyard /> so it keeps tracking window resizes.
  createRoot(container).render(
    <Lanyard
      gravity={[0, -40, 0]}
      frontImage="images/lanyard/front.png"
      backImage="images/lanyard/back.png"
      imageFit="cover"
    />
  )
}
