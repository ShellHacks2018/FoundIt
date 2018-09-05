FROM fedora:28

WORKDIR /opt/backend
COPY ./ ./

RUN dnf -y update
RUN touch /etc/yum.repos.d/yarn.repo
RUN curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo > /etc/yum.repos.d/yarn.repo
RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN dnf -y install nodejs yarn
RUN dnf clean all
RUN yarn install

EXPOSE 3001

CMD /bin/bash



