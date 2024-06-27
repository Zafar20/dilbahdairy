"use client"
import s from './Map.module.scss'
import { useTranslations } from 'next-intl';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Приведение типов к any для удаления _getIconUrl
(delete (L.Icon.Default.prototype as any)._getIconUrl)
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const Map = () => {
    
    const t = useTranslations('Map');
    const position: [number, number] = [41.383658, 69.234210]; // Явно указываем тип кортежа
  return (
    <section className={s.map}>
    <div className="container">
      <h2 className={s.map_title}>{t('title')}</h2>
      <MapContainer center={position} zoom={13} className={s.map_box}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
            <Tooltip permanent>
              Dilbah Dairy - Молочная продукция оптом
            </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  </section>
  )
}

export default Map