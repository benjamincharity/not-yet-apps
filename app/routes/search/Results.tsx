import React, { ReactElement } from 'react';

interface MyResult {
    label: string;
    value: number;
}

export interface ResultsProps {}

export const Results = React.memo((props: ResultsProps): ReactElement => {
  //const {} = props;

    const results:MyResult[] = [{
        label: 'One',
        value: 1,
    }];

    return (
        <div>
            {!!results.length && (
                <div className="results">
                    <div>RESULTS</div>
                    {results.map(r => {
                        return (
                            <div key={r.value} className="result">
                                {r.label}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
});
