'use client'
import {useState, FC} from 'react'
import s from  './Pagination.module.scss'
import ReactPaginate from 'react-paginate';


type PagionationProps = {
    currentPage: number,
    onChangePage: (page: number) => void;
    totalCount: number
    limit:number
  }

const Pagination: FC<PagionationProps> = ({currentPage,onChangePage, totalCount, limit}) => {
    
    
   const total = Math.ceil(totalCount / limit)

    
  return (
    <ReactPaginate
          className={s.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageCount={total}
            forcePage={currentPage - 1}
            previousLabel="<"
            marginPagesDisplayed={2}

          />
  )
}

export default Pagination