'use client'

import React, { useState, useEffect } from 'react'
import { X, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnnouncementConfig {
    enabled: boolean
    message: string
    type: 'info' | 'warning' | 'alert'
    dismissible: boolean
    link?: {
        text: string
        url: string
    }
}

const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [announcement, setAnnouncement] = useState<AnnouncementConfig | null>(
        null
    )
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        // Buscar configuração do banner da API externa (PHP)
        const apiUrl = process.env.NEXT_PUBLIC_ANNOUNCEMENT_API_URL

        // Só busca se a API externa estiver configurada
        if (!apiUrl) {
            return
        }

        fetch(apiUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error('API not available')
                }
                return res.json()
            })
            .then((data: AnnouncementConfig) => {
                if (data && data.enabled) {
                    // Verificar se o usuário já fechou este banner específico
                    const bannerId = data.message.substring(0, 50) // ID baseado na mensagem
                    const dismissed = localStorage.getItem(
                        `banner-dismissed-${bannerId}`
                    )
                    if (!dismissed || !data.dismissible) {
                        setAnnouncement(data)
                        setIsVisible(true)
                    }
                }
            })
            .catch(err => {
                // Silently fail if API is not available
                console.log('Banner API not available:', err.message)
            })
    }, [mounted])

    const handleDismiss = () => {
        if (announcement?.dismissible) {
            const bannerId = announcement.message.substring(0, 50)
            localStorage.setItem(`banner-dismissed-${bannerId}`, 'true')
            setIsVisible(false)
        }
    }

    if (!mounted || !announcement) return null

    const icons = {
        info: Info,
        warning: AlertTriangle,
        alert: AlertCircle
    }

    const colors = {
        info: 'bg-gradient-to-r from-blue-500 to-blue-600',
        warning: 'bg-gradient-to-r from-amber-500 to-orange-500',
        alert: 'bg-gradient-to-r from-red-500 to-red-600'
    }

    const iconBg = {
        info: 'bg-blue-400/20',
        warning: 'bg-white/20',
        alert: 'bg-red-400/20'
    }

    const Icon = icons[announcement.type]

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.6, bounce: 0.3 }}
                    className={`w-full ${
                        colors[announcement.type]
                    } text-white shadow-xl relative z-[60]`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div
                                className={`${
                                    iconBg[announcement.type]
                                } p-2 rounded-lg flex-shrink-0 hidden sm:flex items-center justify-center`}
                            >
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <Icon className="w-5 h-5 text-white flex-shrink-0 sm:hidden" />
                                <p className="text-sm sm:text-base font-medium leading-snug flex-1">
                                    {announcement.message}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                                {announcement.link && (
                                    <a
                                        href={announcement.link.url}
                                        className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all backdrop-blur-sm whitespace-nowrap"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {announcement.link.text}
                                    </a>
                                )}
                                {announcement.dismissible && (
                                    <button
                                        onClick={handleDismiss}
                                        className="p-1.5 hover:bg-white/20 rounded-lg transition-all"
                                        aria-label="Fechar aviso"
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AnnouncementBanner
