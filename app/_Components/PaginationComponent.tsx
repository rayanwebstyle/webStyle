
import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {cn} from "@/lib/utils";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    classname:string
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange,classname }) => {
    return (
        <Pagination className={cn(` mt-8 ${classname}`)}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => {
                            if (currentPage > 1) {
                                onPageChange(currentPage - 1);
                            }
                        }}
                        isActive={currentPage != 1}
                        className={"cursor-pointer bg-primary/50 text-primary"}
                    />
                </PaginationItem>
                <div className={"max-lg:hidden inline-flex"}>
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index} >
                        <PaginationLink
                            onClick={() => onPageChange(index + 1)}
                            isActive={currentPage === index + 1}
                            className={"cursor-pointer "}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                </div>
                <PaginationItem>
                    <PaginationNext
                        onClick={() => {
                            if (currentPage < totalPages) {
                                onPageChange(currentPage + 1);
                            }
                        }}
                        isActive={currentPage != totalPages}
                        className={"cursor-pointer bg-primary/50 text-primary"}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
