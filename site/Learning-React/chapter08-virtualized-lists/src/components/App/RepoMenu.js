import React, { useEffect } from "react";
import useIterator from "../Iterator/IteratorHook";
import RepositoryReadme from "../Readme/Readme";

export default function RepoMenu({ repositories, onSelect = f => f }) {
    const [ repository ,  previous, next ] = useIterator(repositories, 0);
    
    useEffect(() => {
        if (!repository) return;
        onSelect(repository);
    }, [repository, onSelect]);

    return ( 
        <div>
            <h4>Repositories:</h4>
            <p>
                <button onClick={previous}>&lt;</button>
                {repository?.description}
                <button onClick={next}>&gt;</button>
            </p>

            <RepositoryReadme login={repository?.owner.login} repo={repository?.name} />
        </div>
    );
}