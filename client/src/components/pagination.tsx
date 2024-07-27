import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";

import {
  PaginationItem,
  PaginationContainer,
  Arrow,
} from "../styles/paginationStyle";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;

  className?: string;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,

    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < totalCount) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer className={classnames(className)}>
      <PaginationItem
        className={classnames({
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <Arrow className="left" />
      </PaginationItem>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem key={index} className="dots">
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            key={index}
            className={classnames({
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        className={classnames({
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <Arrow className="right" />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
