import { FC } from 'react'
import { TagProps } from '@/components/tag/models.ts'
import '@/components/tag/Tag.scss'

export const Tag: FC<TagProps> = ({ children }) => {
  return children && <div className="custom-tag">{children}</div>
}
