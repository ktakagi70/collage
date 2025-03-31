import { useState } from 'react';

const App = () => {
  // シンプルな素材データ
  const materials = [
    {
      id: 1,
      name: '青い花のマスキングテープ',
      image: 'https://ik.imagekit.io/oqbliujrf/1.jpg?updatedAt=1743411503090',
      message:
        'リサ、今日はどんな気分？私の花柄を見ていると、あの夏の湖畔の風景を思い出すんだ。青い色って不思議よね...何を感じる？静けさ？広がり？それとも別の何か？私の模様が、あなたの中のどんなイメージと響き合うか、聞かせてほしいな。',
    },
    {
      id: 2,
      name: '赤いリボン',
      image: 'https://ik.imagekit.io/oqbliujrf/3.jpg?updatedAt=1743411504018',
      message:
        'あのクリスマスマーケットの灯りを覚えてる？あの時のあなたの表情が忘れられないの。私を見ると、どんな記憶が蘇る？どんな感情が湧いてくる？私はただのリボンじゃない...あなたの記憶と感情が込められた特別な存在なの。今日の気持ちと私を、どう重ね合わせる？',
    },
    {
      id: 3,
      name: '緑の葉っぱシール',
      image: 'https://ik.imagekit.io/oqbliujrf/2.jpg?updatedAt=1743411499809',
      message:
        '植物園で私を見つけた時、何を考えていたの？自然の中にいると、いつも新しい発見があるよね。色々な素材と一緒にいると、私も違った表情を見せるみたい。あなたの目には、私がどんな可能性を秘めているように映る？今日の私は、あなたの作品のどんな部分になりたいかな...',
    },
  ];

  // 選択された素材と表示するメッセージの状態
  const [selectedMaterial, setSelectedMaterial] = useState<typeof materials[0] | null>(null);

  // 素材をクリックしたときのハンドラ
  const handleMaterialClick = (material: typeof materials[0]) => {
    setSelectedMaterial(material);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">コラージュの森</h1>
        <p className="text-gray-600">素材の呟き機能プロトタイプ</p>
        <p className="text-sm text-green-600 mt-2 italic">
          「素材たちの声を聴いてみよう」
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3 text-green-700">
          素材ライブラリ
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          素材をクリックすると、その素材の呟きが聞こえます
        </p>

        <div className="grid grid-cols-3 gap-3">
          {materials.map((material: typeof materials[0]) => (
            <div
              key={material.id}
              className={`border rounded-lg p-2 cursor-pointer transition-all 
                ${
                  selectedMaterial && selectedMaterial.id === material.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              onClick={() => handleMaterialClick(material)}
            >
              <img
                src={material.image}
                alt={material.name}
                className="rounded w-full h-20 object-cover mb-2"
              />
              <p className="text-xs text-center font-medium text-gray-800">
                {material.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedMaterial && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={selectedMaterial.image}
              alt={selectedMaterial.name}
              className="w-16 h-16 object-cover rounded"
            />
            <h2 className="text-lg font-semibold text-green-700">
              {selectedMaterial.name}
            </h2>
          </div>

          <div className="p-4 bg-green-50 rounded-lg relative">
            <div className="absolute top-0 left-4 transform -translate-y-1/2 w-3 h-3 bg-green-50 rotate-45"></div>
            <p className="text-gray-700 italic text-sm leading-relaxed">
              『{selectedMaterial.message}』
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
