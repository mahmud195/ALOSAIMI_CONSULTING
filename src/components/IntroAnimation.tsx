'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface IntroAnimationProps {
    onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
    const [isAnimating, setIsAnimating] = useState(true)
    const [gatesOpen, setGatesOpen] = useState(false)

    useEffect(() => {
        // Start gate opening after a short delay
        const openTimer = setTimeout(() => {
            setGatesOpen(true)
        }, 1500)

        // Complete animation and hide overlay
        const completeTimer = setTimeout(() => {
            setIsAnimating(false)
            onComplete()
        }, 3000)

        return () => {
            clearTimeout(openTimer)
            clearTimeout(completeTimer)
        }
    }, [onComplete])

    return (
        <AnimatePresence>
            {isAnimating && (
                <>
                    {/* Top Gate */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: gatesOpen ? '-100%' : 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="fixed top-0 left-0 right-0 h-1/2 z-[1000] bg-black flex items-center justify-center p-8"
                    >
                        {/* Top Gate Text - ALOSAIMI CONSULTING */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-center w-full"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-[0.1em] uppercase">
                                ALOSAIMI CONSULTING
                            </h1>
                        </motion.div>

                        {/* Bottom border line */}
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
                    </motion.div>

                    {/* Bottom Gate */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: gatesOpen ? '100%' : 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="fixed bottom-0 left-0 right-0 h-1/2 z-[1000] bg-black flex items-center justify-center p-8"
                    >
                        {/* Bottom Gate Text - A FOUNDATION OF TRUST - Distributed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="w-full max-w-[95vw] mx-auto"
                        >
                            <div className="flex items-center justify-between w-full">
                                <span className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest">A</span>
                                <span className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest">FOUNDATION</span>
                                <span className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest">OF</span>
                                <span className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest">TRUST</span>
                            </div>
                        </motion.div>

                        {/* Top border line */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
                    </motion.div>

                    {/* Center divider line */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                            scaleX: gatesOpen ? 0 : 1,
                            opacity: gatesOpen ? 0 : 1
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="fixed top-1/2 left-0 right-0 h-[2px] z-[1001] bg-white -translate-y-1/2"
                    />
                </>
            )}
        </AnimatePresence>
    )
}
