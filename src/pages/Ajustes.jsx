

import React from 'react';
import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { classNames } from 'primereact/utils';
import "../style.css/Ajustes.css";

export default function Ajustes() {
    const itemRenderer = (item) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );
    let items = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="">
                        </svg>
               
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span> 
                             <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle"  /> 

                        </div>
                       
                    </span>
                );
            }
        },
        {
            separator: true
        },
        {
            label: 'Ajustes',
            items: [
                {
                    label: 'Privacidad/seguridad',
                    icon: 'pi pi-plus',

                },
                {
                    label: 'Tema',
                    icon: 'pi pi-search',


                }
            ]
        },
        {
            label: 'Perfil',
            items: [
                {
                    label: 'Configuracion',
                    icon: 'pi pi-cog',

                },
                {
                    label: 'Notificaciones',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Terminos y condiciones',
                    icon: 'pi pi-sign-out',

                    template: itemRenderer
                },
                {
                    label: 'Cerarr sesion',
                    icon: 'pi pi-sign-out',

                    template: itemRenderer
                }

            ]
        },
        {
            separator: true
        },
        {
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
            },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                         <span className="font-medium text-xl font-semibold">
                            SIBU<span className="text-primary"></span>
                        </span>
                    </button>
                );
            }
        }
    ];

    return (
        <div className="card flex justify-content-center menu-sibu">
            <Menu model={items} className="w-full md:w-15rem configuracion" />
        </div>
    )
}
