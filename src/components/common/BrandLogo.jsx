import React from 'react'
import { FaBed } from 'react-icons/fa'

export default function BrandLogo({ showIcon = true, variant = 'default', className = '' }) {
    const wordmark = (
        <span className={`brand-wordmark brand-wordmark--${variant}`}>
            <span className="brand-wordmark__stay">Stay</span>
            <span className="brand-wordmark__sure">Sure</span>
        </span>
    )

    if (!showIcon) {
        return <span className={className}>{wordmark}</span>
    }

    return (
        <span className={`brand-logo brand-logo--${variant} d-inline-flex align-items-center gap-2 ${className}`}>
            <span className="brand-logo__mark" aria-hidden="true">
                <FaBed />
            </span>
            {wordmark}
        </span>
    )
}
