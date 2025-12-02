'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalConfig {
    enabled: boolean
    type: 'text' | 'image'
    title?: string
    message?: string
    imageUrl?: string | null
    link?: {
        text: string
        url: string
    } | null
    dismissible: boolean
    showOnce: boolean
}

const AnnouncementModal = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [modal, setModal] = useState<ModalConfig | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const apiUrl =
            (process.env.NEXT_PUBLIC_ANNOUNCEMENT_API_URL || '').replace(
                'announcements.php',
                'modal.php'
            ) || '/api/modal'

        fetch(apiUrl)
            .then(res => res.json())
            .then((data: ModalConfig) => {
                if (data.enabled) {
                    // Converter URL relativa para absoluta
                    if (data.imageUrl && data.imageUrl.startsWith('./')) {
                        const baseUrl = apiUrl.substring(
                            0,
                            apiUrl.lastIndexOf('/')
                        )
                        data.imageUrl = baseUrl + data.imageUrl.substring(1)
                    }

                    const modalId =
                        data.imageUrl ||
                        data.message?.substring(0, 50) ||
                        'modal'
                    const viewedKey = `modal-viewed-${modalId}`

                    if (data.showOnce) {
                        const hasViewed = localStorage.getItem(viewedKey)
                        if (hasViewed) return
                    }

                    setModal(data)
                    setIsVisible(true)

                    // Marcar como visualizado se showOnce = true
                    if (data.showOnce) {
                        localStorage.setItem(viewedKey, 'true')
                    }
                }
            })
            .catch(() => {
                // Silently fail
            })
    }, [mounted])

    const handleClose = () => {
        if (modal?.dismissible) {
            setIsVisible(false)
        }
    }

    if (!mounted || !modal) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            onClick={e => e.stopPropagation()}
                            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                        >
                            {/* Close Button */}
                            {modal.dismissible && (
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                                    aria-label="Fechar"
                                >
                                    <X className="w-6 h-6 text-gray-700" />
                                </button>
                            )}

                            {/* Content */}
                            <div className="overflow-y-auto max-h-[90vh]">
                                {modal.type === 'image' && modal.imageUrl ? (
                                    <div className="relative w-full">
                                        <img
                                            src={modal.imageUrl}
                                            alt={modal.title || 'Aviso'}
                                            className="w-full h-auto object-contain"
                                            style={{ maxHeight: '80vh' }}
                                        />
                                        {modal.link && (
                                            <div className="p-6 text-center">
                                                <a
                                                    href={modal.link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    {modal.link.text}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-8">
                                        {modal.title && (
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                                {modal.title}
                                            </h2>
                                        )}
                                        {modal.message && (
                                            <p className="text-gray-700 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                                                {modal.message}
                                            </p>
                                        )}
                                        {modal.link && (
                                            <div className="text-center">
                                                <a
                                                    href={modal.link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    {modal.link.text}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default AnnouncementModal
