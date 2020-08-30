import React from 'react'
import { LoadMoreBtn } from './LoadMore.styles'

const LoadMore = ({ callback }) => (
  <LoadMoreBtn type="button" onClick={callback}>
    Load More
  </LoadMoreBtn>
)

export default LoadMore