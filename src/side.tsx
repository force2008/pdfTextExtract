import React from 'react';
import { Anchor, ConfigProvider } from 'antd';

const SideMenu: React.FC = () => (
    <ConfigProvider
        theme={{
            token: {
                colorText: '#ddd',
                colorPrimary:'#fff',
                fontSize: 14,
            },
        }}
    >
        <Anchor
            style={{ textAlign: 'left', paddingTop: '24px' }}
            affix={false}
            items={[
                {
                    key: '1',
                    href: '#components-anchor-demo-basic',
                    title: 'Extract text from PDF',
                },
                {
                    key: '2',
                    href: '#components-anchor-demo-static',
                    title: 'Static demo',
                },
                {
                    key: '3',
                    href: '#api',
                    title: 'API',
                    children: [
                        {
                            key: '4',
                            href: '#anchor-props',
                            title: 'Anchor Props',
                        },
                        {
                            key: '5',
                            href: '#link-props',
                            title: 'Link Props',
                        },
                    ],
                },
            ]}
        />
    </ConfigProvider>

);

export default SideMenu;