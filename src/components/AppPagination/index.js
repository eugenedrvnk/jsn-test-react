import React from 'react'

import { Button } from '@material-ui/core';
import classNames from 'classnames'
import './index.scss'

export default function Pagination(props) {
  function lastPage() {
    return Math.ceil((props.totalItems) / props.itemsPerPage)
  }

  function tempPages() {
    let _lastPage = lastPage()

    if (props.activePage < 3) return [2,3,4,5,6]
    if (props.activePage > _lastPage - 4) return range(_lastPage-5, _lastPage-1)
    else return range(props.activePage - 1, props.activePage + 3)
  }

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  
  return (
    <div className={`pagination`}>
      <Button 
        variant="contained" 
        className="pagination__btn"
        disabled={props.totalItems.length == 0}
        color={props.activePage == 0 ? 'primary' : ''}
        onClick={() => props.onChange(0)}
      >
       1
      </Button>
      <span className="pagination__divider">- - -</span>
      {tempPages().map(num => 
        <Button
          variant="contained" 
          className="pagination__btn"
          disabled={num >= lastPage()}
          color={props.activePage == num-1 ? 'primary' : ''}
          onClick={() => props.onChange(num-1)}
        >
          {num}
        </Button>
      )}
      <span className="pagination__divider">- - -</span>
      <Button 
        variant="contained" 
        className="pagination__btn"
        color={props.activePage == lastPage()-1 ? 'primary' : ''}
        onClick={() => props.onChange(lastPage() - 1)}
      >
        {lastPage()}
      </Button>
    </div>
  )
}