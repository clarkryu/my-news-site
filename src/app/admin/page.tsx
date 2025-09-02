'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // 직접 HTML 페이지로 리다이렉트
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>관리자 페이지로 이동 중...</p>
    </div>
  );
}