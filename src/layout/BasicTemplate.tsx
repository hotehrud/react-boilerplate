import React, { useEffect, useState } from 'react';

import { IBasicTemplate } from '../interfaces/IBasicTemplate';
import FormattedMessageWrapped from '../components/FormattedMessageWrapped';

const BasicTemplate = ({
    title,
    children
}: IBasicTemplate) => {
    return (
        <>
            <header>
                <FormattedMessageWrapped id={title}/>
            </header>

            <aside>
                Sidebar
            </aside>
            {children}
        </>
    );
};

export default BasicTemplate;
