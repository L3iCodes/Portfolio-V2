'use client'

import Button from "@/src/components/Button";
import { borderColors, pageBackgroundEffects, projectCoverColors, projectCoverStyles, shadowColors } from "@/src/lib/styles"
import { useState } from "react";

export default function NewProjectPage() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [colorTheme, setColorTheme] = useState<projectCoverColors | null>(null);
    const [coverImg, setCoverImg] = useState("");
    const [github, setGithub] = useState("");
    const [link, setLink] = useState("");
    const [overview, setOverview] = useState("");

    const handleCoverImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            // reader.result can be string or ArrayBuffer, cast to string
            setCoverImg(reader.result as string);
        };

        reader.readAsDataURL(file);
    };

    return(
        <div className="flex gap-5">
            {/* Form */}
            <form className="w-[250px] bg-base-100 border border-base-content/20 p-3 flex flex-col gap-5 rounded-sm">
                <h1 className="font-semibold mb-2">Project Information</h1>
                
                {/* Title */}
                <div>
                    <label className="text-sm font-medium">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        className="p-1 text-sm w-full border border-base-content/20 rounded-sm" 
                        onChange={(e) => setTitle(e.currentTarget.value)}
                        />
                </div>

                {/* Subtitle */}
                <div>
                    <label className="text-sm font-medium">Subtitle</label>
                    <input 
                        type="text" 
                        name="subtitle" 
                        className="p-1 text-sm w-full border border-base-content/20" 
                        onChange={(e) => setSubtitle(e.currentTarget.value)}
                    />
                </div>

                {/* Background Colors */}
                <div>
                    <label className="text-sm font-medium">Background Colors</label>
                    <div className="flex justify-between">
                        {Object.entries(projectCoverStyles).map(([key, value]) => {
                            const k = key as keyof typeof projectCoverStyles;
                            return (
                                <button
                                    type="button"
                                    key={k}
                                    className={`h-12 w-12 border-2 border-base-100 rounded-xs ${colorTheme === k && borderColors[k]}`}
                                    style={{ background: value }}
                                    onClick={() => setColorTheme(k)}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Cover Image Upload */}
                <div>
                    <label className="text-sm font-medium">Background Colors</label>
                    <input 
                        type="file" 
                        name="coverImg" 
                        accept="image/*" 
                        onChange={handleCoverImgUpload} 
                        className="p-1 text-sm w-full border border-base-content/20"
                    />
                </div>

                {/* Github */}
                <div>
                    <label className="text-sm font-medium">Github</label>
                    <input 
                        type="text" 
                        name="github" 
                        className="p-1 text-sm w-full border border-base-content/20" 
                        onChange={(e) => setGithub(e.currentTarget.value)}
                    />
                </div>

                {/* Live Link */}
                <div>
                    <label className="text-sm font-medium">Live Link</label>
                    <input 
                        type="text" 
                        name="live-link" 
                        className="p-1 text-sm w-full border border-base-content/20" 
                        onChange={(e) => setLink(e.currentTarget.value)}
                    />
                </div>



                {/* ==== SECTIONS ==== */}
                {/* Overview Section */}
                <div>
                    <label className="text-sm font-medium">Overview</label>
                    <textarea 
                        name="overview" 
                        className="p-1 text-sm w-full border border-base-content/20 h-30 resize-none" 
                        onChange={(e) => setOverview(e.currentTarget.value)}
                    />
                </div>
                
            </form>


            {/* PREVIEW */}
            <div className="flex-3 flex gap-10 p-5 lg:p-10 border border-base-content/20 bg-base-200 relative rounded-sm">
                {/* BG Gradient */}
                {colorTheme && (
                    <div
                        className="absolute inset-0 z-0"
                        style={{ background: pageBackgroundEffects[colorTheme] }}
                    />
                )}

                <div className="flex-1 space-y-5 z-10">
                    {/* Tile and Subtitle */}
                    <div>
                        <h1 className="text-4xl font-bold font-bricolage">{title}</h1>
                        <p className="text-base-content/50">
                            {subtitle}
                        </p>
                    </div>  

                    {/* Cover Image / Header */}
                    {coverImg && colorTheme && (
                        <div 
                            className="flex items-center justify-center p-5 md:p-8 lg:p-10 border border-base-content/20 rounded-xs relative" 
                            style={{background: projectCoverStyles[colorTheme]}}
                        > 
                            <div className={`rounded-sm w-full h-full ${shadowColors[colorTheme]} shadow-[0_-5px_35px_-5px_rgba(0,0,0,0.3)] relative aspect-video overflow-hidden`}>
                                <img 
                                    src={coverImg}
                                    alt="Profile"
                                    className={`w-full h-full object-cover`}
                                />
                            </div>
                        </div>
                    )}

                    {(github || link) && (
                        <div className="w-full h-16 flex items-center gap-2 bg-base-100 border border-base-content/20 p-3 rounded-sm">
                            <div className="flex-1">
                                <h2 className="text-sm font-bold">DEMO & CODE</h2>
                                <p className="text-xs text-base-content/50">View the full information here</p>
                            </div>
                            <div>
                                <Button 
                                    text="GitHub"
                                    icon="ri:github-fill"
                                    type="rectangle"
                                    className="bg-base-200! hover:bg-base-300!"
                                />
                            </div>
                            <div>
                                <Button 
                                    text={`${link ? 'Demo' : 'Unavailable'}`}
                                    type="rectangle"
                                    className={`${!link ? 'bg-base-100 pointer-events-none' : 'bg-base-200! hover:bg-base-300!'}`}
                                />
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
};