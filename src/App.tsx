import type { ComponentType } from 'react'
import AppShell from './components/AppShell'
import { useRoute } from './router'
import Dashboard from './pages/Dashboard'
import MovieRecap from './pages/MovieRecap'
import ShortDrama from './pages/ShortDrama'
import OneClip from './pages/OneClip'
import CopyRecap from './pages/CopyRecap'
import TranscriptStudio from './pages/TranscriptStudio'
import VoiceStudio from './pages/VoiceStudio'
import SubtitleStudio from './pages/SubtitleStudio'
import BlurStudio from './pages/BlurStudio'
import VideoEditor from './pages/VideoEditor'
import Projects from './pages/Projects'
import ExportHistory from './pages/ExportHistory'

const PAGES: Record<string, ComponentType> = {
  '/': Dashboard,
  '/movie-recap': MovieRecap,
  '/short-drama': ShortDrama,
  '/one-clip': OneClip,
  '/copy-recap': CopyRecap,
  '/transcript-studio': TranscriptStudio,
  '/voice-studio': VoiceStudio,
  '/subtitle-studio': SubtitleStudio,
  '/blur-studio': BlurStudio,
  '/video-editor': VideoEditor,
  '/projects': Projects,
  '/export-history': ExportHistory,
}

export default function App() {
  const path = useRoute()
  // Unknown addresses fall back to the dashboard.
  const Page = PAGES[path] ?? Dashboard

  return (
    <AppShell path={path}>
      <Page />
    </AppShell>
  )
}
