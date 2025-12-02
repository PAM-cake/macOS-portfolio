import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { DownloadIcon } from "lucide-react"
import { Document, Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const RESUME_FILE = "/files/PARAM_PATEL_SEPT_RESUME(25).pdf";

const Resume = () => {
  return (
  <>
    <div id="window-header">
        <WindowControls target="resume"/>
        <h2>Resume.pdf</h2>
        <a href={RESUME_FILE} download className="cursor-pointer" title="Download Resume">
          <DownloadIcon className="icon"/>
        </a>
    </div>
    <Document file={RESUME_FILE}>
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer/>
      </Document>
  </>
  )
}


const ResumeWindow = WindowWrapper(Resume, 'resume')
export default ResumeWindow