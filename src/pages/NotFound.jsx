import MainLayout from '../components/layout/MainLayout.jsx'
import Button from '../components/common/Button.jsx'
import PageHeader from '../components/common/PageHeader.jsx'

export default function NotFound() {
  return (
    <MainLayout>
      <PageHeader title="Page not found">
        <p className="mt-5">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button as="a" href="/">Go home</Button>
          <Button as="a" href="/services" className="bg-white">View our services</Button>
        </div>
      </PageHeader>
    </MainLayout>
  )
}
