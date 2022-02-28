export function getIsMobile(req) {
  const userAgent = req?.headers["user-agent"] ?? navigator.userAgent;
  const mobileAgents =
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
  return Boolean(userAgent.match(mobileAgents));
}
