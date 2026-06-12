import React, { useEffect } from "react";
import useIterator from "../Iterator/IteratorHook";

export default function RepoMenu({ repositories, onSelect = f => f }) {
    const [ repository ,  previous, next ] = useIterator(repositories, 0);
    
    useEffect(() => {
        if (!repository) return;
        onSelect(repository);
    }, [repository, onSelect]);

    return ( 
        <div>
            <p>Repositories:</p>
            <p>
                <button onClick={previous}>&lt;</button>
                {repository?.description}
                <button onClick={next}>&gt;</button>
            </p>
        </div>
    );
}