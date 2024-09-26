import { AiServiceTableListItem, AiServiceRouterTableListItem, VariableItems } from "./type";
import { TabsProps } from "antd";
import { frontendTimeSorter } from "@common/utils/dataTransfer";
import { COLUMNS_TITLE, PLACEHOLDER } from "@common/const/const";

import { PageProColumns } from "@common/components/aoplatform/PageList";

export const AI_SERVICE_TABLE_COLUMNS: PageProColumns<AiServiceTableListItem>[] = [
    {
        title:('服务名称'),
        dataIndex: 'name',
        ellipsis:true,
        width:160,
        fixed:'left',
        sorter: (a,b)=> {
            return a.name.localeCompare(b.name)
        },
    },
    {
        title:('服务 ID'),
        dataIndex: 'id',
        width: 140,
        ellipsis:true,
    },
    {
        title:('AI 模型供应商'),
        dataIndex: ['provider','name'],
        ellipsis:true,
    },
    {
        title:('所属团队'),
        dataIndex: ['team','name'],
        ellipsis:true,
        // filters: true,
        // onFilter: true,
        // filterSearch: true,
    },
    {
        title:('API 数量'),
        dataIndex: 'apiNum',
        ellipsis:true,
        sorter: (a,b)=> {
            return a.apiNum - b.apiNum
        },
    },
    {
        title: ('描述'),
        dataIndex: 'description',
        ellipsis:true,
    },
    {
        title:('创建时间'),
        dataIndex: 'createTime',
        width:182,
        ellipsis:true,
        sorter: (a,b)=>frontendTimeSorter(a,b,'createTime')
    }
];

export const AI_SERVICE_ROUTER_TABLE_COLUMNS: PageProColumns<AiServiceRouterTableListItem>[] = [
    {
        title:('URL'),
        dataIndex: 'requestPath',
        ellipsis:true
    },
    {
        title:('名称'),
        dataIndex: 'name',
        ellipsis:true,
    },
    {
        title:('模型'),
        dataIndex: ['model','logo'],
        ellipsis:true,
        render: (_: React.ReactNode, entity: AiServiceRouterTableListItem) =><div className="flex items-center gap-[2px]" > <div className="flex items-center" dangerouslySetInnerHTML={{ __html: entity.model.logo }}></div><span>{entity.model.id}</span></div>
    },
    {
        title:('描述'),
        dataIndex: 'description',
        ellipsis:true
    },
    {
        title:('创建者'),
        dataIndex: ['creator','name'],
        ellipsis: true,
        filters: true,
        onFilter: true,
        valueType: 'select',
        filterSearch: true,
    },
    {
        title:('更新时间'),
        dataIndex: 'updateTime',
        ellipsis:true,
        hideInSearch: true,
        width:182,
        sorter: (a,b)=>frontendTimeSorter(a,b,'updateTime')
    },
];


export const AI_SERVICE_VARIABLES_TABLE_COLUMNS: PageProColumns<VariableItems & {_id:string}>[] = [
    {
      title:('Key'),
      dataIndex: 'key',
      key:'key',
      width: '30%',
      formItemProps: {
        className:'p-0 bg-transparent border-none',
        rules: [
          {
            required: true,
            whitespace: true
          },
          {
            pattern:/^[a-zA-Z][a-zA-Z0-9-_]*$/,
            message: PLACEHOLDER.onlyAlphabet
          }
        ],
      },
      ellipsis:true
    },
    {
      title:('描述'),
      dataIndex: 'description',
      key:'description',
      formItemProps: {
        className:'p-0 bg-transparent border-none'}
    },
    {
      title:('必填'),
      dataIndex: 'require',
      key:'require',
      valueType:'switch',
      width:64,
      formItemProps: {
        className:'p-0 bg-transparent border-none'}
    },
    {
      title: COLUMNS_TITLE.operate,
      valueType: 'option',
      width:34,
      render: ()=>null
    },
  ];

  
export const AiService_INSIDE_APPROVAL_TAB_ITEMS: TabsProps['items'] = [
    {
        key: '0',
        label:('待审批'),
    },
    {
        key: '1',
        label: ('已审批'),
    }
];



export const AiService_PUBLISH_TAB_ITEMS: TabsProps['items'] = [
    {
        key: '0',
        label: ('发布版本'),
    },
    {
        key: '1',
        label: ('发布申请记录'),
    }
];
