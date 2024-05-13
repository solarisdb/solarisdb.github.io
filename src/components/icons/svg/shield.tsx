import type { FC } from 'react';

import type { SvgIconProps } from '../base';
import { SvgBaseIcon } from '../base';

export const ShieldIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgBaseIcon viewBox="0 0 29 29" {...props}>
      <path d="M13.417 2.693c-.243.032-.966.238-1.596.454-1.851.634-6.008 2.208-6.633 2.511-.507.246-.84.552-1.016.932l-.135.293-.015 5.064c-.01 3.623.001 5.209.04 5.576.252 2.377 1.417 3.929 4.442 5.917 1.118.735 4 2.43 4.644 2.73.368.172.811.173 1.179.003.392-.181 3.004-1.689 3.96-2.286 3.227-2.015 4.537-3.468 5-5.55.176-.789.191-1.338.177-6.46L23.45 6.93l-.112-.279c-.169-.419-.5-.724-1.089-1.004-.688-.326-2.873-1.149-6.263-2.357-1.648-.587-2.012-.672-2.569-.597m1.19 2.115c1.723.663 5.524 2.046 6.346 2.309.142.045.314.111.385.147.282.142.269-.092.269 4.91 0 2.977-.018 4.7-.05 4.938a5.182 5.182 0 0 1-.439 1.54 3.935 3.935 0 0 1-.751 1.135c-.884.992-2.198 1.912-5.91 4.139-.417.25-.664.317-.915.25-.265-.072-3.024-1.74-4.279-2.588-1.614-1.09-2.551-2.054-2.967-3.054a8.059 8.059 0 0 1-.268-.797l-.123-.447-.014-4.884-.014-4.884.106-.121c.127-.142.657-.349 3.677-1.428 1.168-.417 2.48-.895 2.917-1.061.436-.166.856-.319.933-.34.22-.059.469-.006 1.097.236M17.756 9c-.103.047-.25.158-.326.248-.077.089-1.232 1.918-2.567 4.065-1.334 2.147-2.437 3.904-2.45 3.903-.012 0-.516-.641-1.12-1.426-1.32-1.716-1.414-1.826-1.655-1.936-.386-.175-.835-.054-1.119.302-.131.165-.142.208-.142.537.001.307.019.387.129.567.242.397 3.132 3.889 3.337 4.033.39.273 1.025.211 1.369-.135.162-.163 5.469-8.48 5.7-8.933.196-.386.164-.724-.097-1.003A.934.934 0 0 0 17.756 9" />
    </SvgBaseIcon>
  );
};
