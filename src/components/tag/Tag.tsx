import { FC } from 'react'
import { Tag } from '@/components/tag/models.ts'
import '@/components/tag/Tag.scss'

const Tag: FC<Tag> = ({children}) => {
  return children && <div className="tag">{children}</div>
}

export default Tag
