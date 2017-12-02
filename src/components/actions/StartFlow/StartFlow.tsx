import * as React from 'react';
import { StartFlow } from '../../../flowTypes';

const StartFlowComp: React.SFC<StartFlow> = ({ flow_name }): JSX.Element => <div>{flow_name}</div>;

export default StartFlowComp;