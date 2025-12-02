'use client'

import dynamic from 'next/dynamic'

const AnnouncementBanner = dynamic(
    () => import('@/components/ui/announcement-banner'),
    { ssr: false }
)
const AnnouncementModal = dynamic(
    () => import('@/components/ui/announcement-modal'),
    { ssr: false }
)

export default function ClientAnnouncements() {
    return (
        <>
            <AnnouncementBanner />
            <AnnouncementModal />
        </>
    )
}
