FROM nginx:1.27-alpine
COPY index.html style.css app.js story.json characters.json squads.json /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/
COPY audio/ /usr/share/nginx/html/audio/
COPY images /usr/share/nginx/html/images/
COPY audio /usr/share/nginx/html/audio/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
